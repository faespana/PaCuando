export function Footer() {
  return (
    <div className='min-h-[488px] flex justify-center items-center bg-[url("/footer-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
      <div className="flex gap-4 mt-44">
        <input
          className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
      </div>
    </div>
  );
}
