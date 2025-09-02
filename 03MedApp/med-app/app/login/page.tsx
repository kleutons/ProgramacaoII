"use client";
import InputText from "@/src/components/ui/InputText";
import ButtonPrimary from "@/src/components/ui/ButtonPrimary";
import FormLogin from "@/src/components/ui/FormLogin";
import useAuth from "@/src/hooks/useAuth";
import LogoSvg from "@/src/components/svg/logoSvg";

export default function LoginPage() {
  const {
    login: { username, setUsername, password, setPassword, loading, error, handleSubmit },
  } = useAuth();

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center bg-[url('/imgs/bg.png')] bg-cover bg-center px-4">
      <div className="max-w-md">
        <LogoSvg />
      </div>
      <FormLogin onSubmit={handleSubmit} title="Login" errorMessage={error || undefined}>
        <InputText
          label="Usuário"
          type="text"
          value={username}
          onChange={setUsername}
          required
          autoComplete
        />
        <InputText
          label="Senha"
          type="password"
          value={password}
          onChange={setPassword}
          required
          autoComplete
        />
        <ButtonPrimary label="Entrar" type="submit" loading={loading} disabled={loading} />
      </FormLogin>
    </div>
  );
}
