import React from "react";

export function App() {
  const [user, setUser] = React.useState("");
  const onUserChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  return (
    <div>
      Username:{user}
      <div>
        <input value={user} onChange={onUserChanged} />
      </div>
    </div>
  );
}
