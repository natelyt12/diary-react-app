
import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privateDiary, setPrivateDiary] = useState(true);

  const [profile, setProfile] = useState({
    name: "My Diary",
    email: "user@example.com",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-4xl">

            
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-800">
            Settings
          </h1>
          <p className="mt-2 text-neutral-500">
            Manage your account and personalize your diary.
          </p>
        </div>

       
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">
            Profile Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Display Name
              </label>
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </section>

        
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">
            Appearance
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-neutral-500">
                Switch to a darker interface.
              </p>
            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="h-5 w-5 accent-blue-600"
            />
          </div>
        </section>

        
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">
            Privacy
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Private Diary</p>
              <p className="text-sm text-neutral-500">
                Keep your diary entries private.
              </p>
            </div>

            <input
              type="checkbox"
              checked={privateDiary}
              onChange={(e) => setPrivateDiary(e.target.checked)}
              className="h-5 w-5 accent-blue-600"
            />
          </div>
        </section>

        
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">
            Notifications
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Daily Reminder</p>
              <p className="text-sm text-neutral-500">
                Remind me to write my diary every day.
              </p>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="h-5 w-5 accent-blue-600"
            />
          </div>
        </section>

        
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">
            Account
          </h2>

          <button className="rounded-lg border border-red-200 px-5 py-2 text-red-500 transition hover:bg-red-50">
            Log Out
          </button>
        </section>

        
        <div className="flex justify-end">
          <button
            onClick={() => alert("Settings saved successfully!")}
            className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
