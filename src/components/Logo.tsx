type LogoProps = {
  logo: string;
};

export const Logo = ({ logo }: LogoProps) => {
  return (
    <div className="flex items-center">
      <h1 className="text-3xl font-black text-primary">{logo}</h1>
    </div>
  );
};
