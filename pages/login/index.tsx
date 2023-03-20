import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className='bg-[url("/login-banner.png")] md:flex items-center justify-center hidden '></div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-20 max-w-[580px] mx-auto">
        <Link href={'/'}>
          <Logo variant="blue" onlyIcon={true} />
        </Link>
        <div className="w-full text-left flex flex-col gap-8">
          <div>
            <h1 className="text-[32px] font-medium">Hola!</h1>
            <p>Inicie sesión con los datos que ingreso durante su registro</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <label className="flex flex-col gap-1">
              <span className="font-semibold">Email</span>
              <input
                className="p-4 border border-app-grayDark"
                type="text"
                {...register('email')}
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold">Password</span>
              <input
                className="p-4 border border-app-grayDark"
                type="password"
                {...register('password')}
              />
            </label>
            <span className="text-center app-subtitle-2 pt-2">
              Did you forget your password?
            </span>
            <button>Iniciar Sesión</button>
            <Link href="/sign-up">O crea una cuenta nueva</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
