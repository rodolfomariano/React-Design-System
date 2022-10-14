import { Envelope, Eye, EyeSlash, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { SimpleButton } from "../components/SimpleButton";
import { SocialButton } from "../components/SocialButton";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export interface SignInProps {}

export function SignIn() {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)

  function handleSeePassword(e: FormEvent) {
    e.preventDefault()

    setIsVisiblePassword(!isVisiblePassword)
  }

  return (
    <div className='w-screen h-screen bg-gray-700 flex items-center justify-center flex-col text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg'>
          Ignite Lab
        </Heading>

        <Text size='lg'>Faça login e comece a usar!</Text>
      </header>

      <div className='flex items-center gap-4 mt-12'>
        <SocialButton socialMedia='google' />
        <SocialButton socialMedia='github' />
        <SocialButton socialMedia='discord' />
      </div>

      <div className='relative mt-8'>
        <div className='w-[400px] h-[1px] bg-gray-500' />

        <div className='absolute top-[-12px] left-[50%] translate-x-[-50%] bg-gray-700 px-2'>
          <span className='text-gray-500'>ou</span>
        </div>
      </div>

      <form className='flex flex-col items-stretch mt-8 w-full max-w-[400px]'>
        <label htmlFor="email" className='flex flex-col gap-1'>
          <Text size="md" className='text-gray-300'>Endereço de email</Text>

          <TextInput.Root>
            <TextInput.LeftIcon>
              <Envelope />
            </TextInput.LeftIcon>
            <TextInput.Input id="email" placeholder='Digite seu email' type="email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-1 mt-4'>
          <Text size="md" className='text-gray-300'>Sua senha</Text>

          <TextInput.Root>
            <TextInput.LeftIcon>
              <Lock />
            </TextInput.LeftIcon>
            <TextInput.Input id="password" placeholder='Digite sua senha' type={isVisiblePassword ? 'text' : 'password'} />
            <TextInput.RightIcon>
              <button className='hover:text-yellow-500' onClick={handleSeePassword}>
                {isVisiblePassword ? <EyeSlash /> : <Eye />}
                
              </button>
            </TextInput.RightIcon>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2 my-6'>
          <Checkbox id='remember' />
          <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <SimpleButton type='submit' className='mt-4'>Entrar na plataforma</SimpleButton>

        <Text asChild size="sm" className='mt-2 text-center'>
          <a href="" className='text-gray-500 underline duration-300 hover:text-cyan-500'>Esqueceu sua senha?</a>
        </Text>

        <Text asChild size="sm" className='mt-8 text-center'>
          <span className='text-gray-500'>
            Não possui conta? 
            <a href="" className='text-green-500 underline text-lg ml-2 duration-300 hover:brightness-75'>Crie uma agora</a>

          </span>
        </Text>
      </form>
    </div>
  )
}