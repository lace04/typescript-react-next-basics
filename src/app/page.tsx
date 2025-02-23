type ButtonProps = {
  label: string;
  subtitle?: string;
  color?: string;
};

function Button({ label, subtitle, color }: ButtonProps) {
  return (
    <button style={{ backgroundColor: color }}>
      {label}
      {subtitle}
    </button>
  );
}

function page() {
  return (
    <div>
      <Button label='Texto' subtitle=' subtitulo' color={'#254786'} />
    </div>
  );
}

export default page;
