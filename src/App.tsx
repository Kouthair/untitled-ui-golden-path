import { Button } from "@ui/components/base/buttons/button";
import { Input } from "@ui/components/base/input/input";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-8">
      <div className="w-full max-w-md rounded-2xl border border-primary bg-secondary p-6 shadow-sm">
        <h1 className="text-display-xs font-semibold text-primary">Account Settings</h1>
        <p className="text-sm text-secondary">Manage your profile details</p>

        <div className="mt-6 flex flex-col gap-4">
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="Email Address" placeholder="you@example.com" type="email" />
          <Button color="primary" size="md" type="submit">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;