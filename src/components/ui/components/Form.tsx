import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <form action="">
        <div className="mb-3">
          <Input
            placeholder="Email"
            size={"lg"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderRadius={"md"}
          />
        </div>
        <div className="mb-3">
          <Input
            placeholder="Password"
            size={"lg"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderRadius={"md"}
          />
        </div>
        <div className="mb-3">
          <Button
            variant="outline"
            colorPalette={"blue"}
            size={"xl"}
            type="submit"
            onClick={handleSubmit}
            borderRadius={"md"}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
