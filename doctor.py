import os
import json
import sys

# 设定颜色，让输出更好看
class Colors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_status(status, message):
    if status == "OK":
        print(f"[{Colors.OKGREEN} ✅ 通过 {Colors.ENDC}] {message}")
    elif status == "WARN":
        print(f"[{Colors.WARNING} ⚠️ 警告 {Colors.ENDC}] {message}")
    elif status == "FAIL":
        print(f"[{Colors.FAIL} ❌ 失败 {Colors.ENDC}] {message}")

def check_file_exists(path, description):
    if os.path.exists(path):
        print_status("OK", f"找到文件: {description} ({path})")
        return True
    else:
        print_status("FAIL", f"缺少文件: {description} ({path})")
        return False

def check_vite_config():
    config_path = "vite.config.ts"
    if not os.path.exists(config_path):
        print_status("FAIL", "找不到 vite.config.ts！项目无法启动。")
        return
    
    with open(config_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # 检查别名配置
    if 'alias' in content and '"@":' in content or "'@':" in content:
        print_status("OK", "Vite 配置中检测到路径别名 '@'")
    else:
        print_status("FAIL", "Vite 配置中缺失 '@' 别名配置！会导致 import @/... 报错。")

    # 检查是否包含危险插件
    if "babel-plugin-jsx-source-location" in content:
        print_status("WARN", "检测到可能导致报错的 Babel 插件脚本引用，建议删除。")

def check_locales():
    print(f"\n{Colors.HEADER}--- 检查翻译文件 (导致白屏的常见原因) ---{Colors.ENDC}")
    missing = False
    if not check_file_exists("src/locales/en.json", "英文翻译包"): missing = True
    if not check_file_exists("src/locales/zh-Hant.json", "繁体中文翻译包"): missing = True
    
    if missing:
        print(f"{Colors.FAIL}>>> 致命错误：缺失翻译文件会导致 React 启动时直接白屏崩溃！请务必补全。{Colors.ENDC}")

def check_dependencies():
    print(f"\n{Colors.HEADER}--- 检查依赖环境 ---{Colors.ENDC}")
    if os.path.isdir("node_modules"):
        print_status("OK", "node_modules 文件夹存在")
        # 简单检查几个关键包
        packages = ["react", "vite", "i18next", "wouter", "framer-motion"]
        found_all = True
        try:
            with open("package.json", "r", encoding='utf-8') as f:
                pkg_data = json.load(f)
                all_deps = {**pkg_data.get("dependencies", {}), **pkg_data.get("devDependencies", {})}
                for p in packages:
                    if p not in all_deps:
                        print_status("WARN", f"package.json 中似乎没看到关键包: {p}")
                        found_all = False
                if found_all:
                    print_status("OK", "关键依赖包在 package.json 中声明正常")
        except Exception as e:
            print_status("WARN", f"无法读取 package.json: {str(e)}")
    else:
        print_status("FAIL", "node_modules 不存在！请先运行 'npm install'")

def check_build_dist():
    print(f"\n{Colors.HEADER}--- 检查打包情况 (如果你要部署到服务器) ---{Colors.ENDC}")
    if os.path.isdir("dist"):
        print_status("OK", "dist 打包目录存在")
        if os.path.exists("dist/index.html"):
            print_status("OK", "dist/index.html 存在")
            # 检查 index.html 里的引用路径
            with open("dist/index.html", "r", encoding='utf-8') as f:
                content = f.read()
                if 'src="/assets/' in content or 'href="/assets/' in content:
                    print_status("WARN", "打包后的路径以 '/' 开头 (如 /assets/...)。这可能导致白屏。")
                    print(f"    建议：在 vite.config.ts 中添加 {Colors.BOLD}base: './'{Colors.ENDC}")
                elif './assets/' in content or 'assets/' in content:
                    print_status("OK", "资源引用路径看起来是相对路径 (./assets/...)")
        else:
            print_status("FAIL", "dist 目录里没有 index.html，打包可能失败了")
    else:
        print_status("WARN", "找不到 dist 目录。如果你是上传到服务器，请务必先运行 'npm run build'")

def main():
    print(f"{Colors.BOLD}{Colors.OKBLUE}=== 塔罗AI项目 自动体检程序 ==={Colors.ENDC}")
    print(f"正在扫描当前目录: {os.getcwd()}\n")
    
    # 1. 基础文件
    check_file_exists("index.html", "入口 HTML")
    check_file_exists("src/main.tsx", "入口 TSX")
    check_file_exists("src/App.tsx", "主组件")
    check_file_exists("src/i18n.ts", "i18n 配置文件")
    check_file_exists("src/lib/utils.ts", "工具函数 utils.ts")
    
    # 2. 翻译文件检查
    check_locales()
    
    # 3. 配置检查
    print(f"\n{Colors.HEADER}--- 检查 Vite 配置 ---{Colors.ENDC}")
    check_vite_config()
    
    # 4. 依赖检查
    check_dependencies()
    
    # 5. 打包检查
    check_build_dist()

    print(f"\n{Colors.BOLD}{Colors.OKBLUE}=== 体检结束 ==={Colors.ENDC}")
    print("如果是 '❌ 失败' 的项，请务必修复！")

if __name__ == "__main__":
    main()