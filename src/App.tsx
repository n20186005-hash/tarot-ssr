import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Home from "@/pages/Home";
import YesNoTarot from "@/pages/YesNoTarot";
import ThreeCardSpread from "@/pages/ThreeCardSpread";
import DailyTarot from "@/pages/DailyTarot";

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
          <div className="absolute top-4 right-4 z-50">
            <LanguageSwitcher />
          </div>
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
