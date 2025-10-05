const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-5 md:px-6 border-t border-border">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-muted-foreground mb-2">
          Designed & Built by{" "}
          <span className="text-gradient font-semibold">Shaheryar Akbar</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;