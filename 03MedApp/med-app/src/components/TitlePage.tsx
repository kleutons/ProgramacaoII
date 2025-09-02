import ButtonPrimary from "./ui/ButtonPrimary";

interface TitlePageProps {
  title: string;
  textButton?: string;
  onClickButton?: () => void;
}
export default function TitlePage({ title, textButton, onClickButton }: TitlePageProps) {
  return (
    <div className="flex justify-between mb-6 px-3">
      <h1 className="flex-1 font-bold text-4xl">{title}</h1>
      {textButton && (
        <div>
          <ButtonPrimary label={textButton} onClick={onClickButton} />
        </div>
      )}
    </div>
  );
}
