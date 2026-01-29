import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import YesNoTarot from "@/pages/YesNoTarot";
import ThreeCardSpread from "@/pages/ThreeCardSpread";
import DailyTarot from "@/pages/DailyTarot";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

// Type assertion wrapper to satisfy wouter's strict typing
const HomePage: any = Home;

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/yes-no-tarot" component={YesNoTarot} />
        <Route path="/three-card" component={ThreeCardSpread} />
        <Route path="/daily-tarot" component={DailyTarot} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          
          {/* ================= 修改重点开始 ================= */}
          {/* 这里增加了一个最外层的 div
              1. min-h-screen: 保证背景铺满全屏，即使内容很少
              2. bg-slate-950: 深色底色
              3. bg-[radial-gradient...]: 这是一个高级的顶部聚光灯效果，营造神秘感
              4. font-sans: 设置默认字体
          */}
          <div className="min-h-screen w-full bg-slate-950 relative overflow-x-hidden text-slate-100 font-sans selection:bg-purple-500/30">
            
            {/* 背景特效：类似于星光或迷雾的顶部光晕 */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
              <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* 内容区域：z-10 保证内容浮在背景之上 */}
            <div className="relative z-10">
              <div className="absolute top-4 right-4">
                <LanguageSwitcher />
              </div>
              
              <AppRouter />
              <Footer />
            </div>
          </div>
          {/* ================= 修改重点结束 ================= */}

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
