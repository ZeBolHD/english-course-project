export const Title = ({ text }: { text: string }) => {
  return (
    <h2 className="font-black text-[80px] text-center text-primary-1 uppercase tracking-wider drop-shadow-text">
      {text}
    </h2>
  );
};
