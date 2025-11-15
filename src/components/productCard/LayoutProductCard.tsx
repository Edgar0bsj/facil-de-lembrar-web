type iProps = Readonly<{
  children: React.ReactNode;
  title: string;
  subTitle: string;
}>;

export default function LayoutProductCard({
  children,
  title,
  subTitle,
}: iProps) {
  return (
    <>
      <section className="pt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subTitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
