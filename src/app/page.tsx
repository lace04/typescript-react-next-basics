type BackgroundColor = 'red' | 'blue' | 'green' | 'white';
type Color = 'red' | 'blue' | 'green';

type ButtonProps = {
  label: string;
  subtitle?: string;
  color: Color;
  backgroundColor: BackgroundColor;
};

function Button({ label, subtitle, color, backgroundColor

 }: ButtonProps) {
  return (
    <button style={{ color, backgroundColor }}>
      {label}
      {subtitle}
    </button>
  );
}

function page() {
  return (
    <div>
      <Button
        label="Click me"
        color="red"
        backgroundColor="white"
      />
    </div>
  );
}

export default page;
