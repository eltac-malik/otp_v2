import NotFoundImg from "@/assets/img/data-not-found.avif";

export const NotFound = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <img src={NotFoundImg} className="w-80" />
      <h1 className="font-bold text-lg text-red-500 mt-3 dark:text-white">
        Məlumat tapılmadı
      </h1>
    </div>
  );
};
