import { Button } from "@ui/components/base/buttons/button";
import { Input } from "@ui/components/base/input/input";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-lg">
      <div className="w-full max-w-md rounded-2xl border border-primary bg-secondary p-lg shadow-sm">
        <h1 className="text-display-sm font-semibold text-primary">Welcome back</h1>

        <div className="mt-lg flex w-full flex-col gap-md">
          <Input label="Email" placeholder="you@example.com" type="email" />
          <Input label="Password" placeholder="Enter your password" type="password" />
          <Button className="w-full" color="primary" type="submit">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;