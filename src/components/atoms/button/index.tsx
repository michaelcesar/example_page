import style from './button.module.css';

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className={style.button}>{text}</button>;
}
