type LineBetweenBlock = {
  short: boolean;
};

export default function LineBetweenBlock({ short }: LineBetweenBlock) {
  return (
    <div
      className={`w-full border-2 border-[#7c96b1] ${short ? 'mt-4' : 'mt-6'}`}
    ></div>
  );
}
