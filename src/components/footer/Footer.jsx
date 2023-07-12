const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full px-1 pt-3 pb-8 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} Gagahealth Private Limited. All Rights Reserved.
        </p>
      </h5>
      <div>

      </div>
    </div>
  );
};

export default Footer;
