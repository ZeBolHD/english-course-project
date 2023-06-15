export const Title = ({ text, id }: { text: string; id?: string }) => {
  return (
    <h2
      id={id}
      className="font-black text-[80px] text-center text-primary-1 uppercase tracking-wider drop-shadow-text"
    >
      {text}
    </h2>
  );
};
