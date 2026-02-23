const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} 明日劇場 - Future Vision Theatre. 保留所有权利。</p>
        <p className="text-sm text-gray-400 mt-2">
          探索超時空的沈浸式智慧展演平台
        </p>
      </div>
    </footer>
  );
};

export default Footer;

