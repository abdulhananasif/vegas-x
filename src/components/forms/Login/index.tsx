import Button from '../../ui/Button';
import Input from '../../ui/Input';

const LoginForm = () => {
  return (
    <form>
      <Input className="w-full" name="username" type="text" />
      <Button name="Login" />
    </form>
  );
};

export default LoginForm;
