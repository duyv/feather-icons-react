export interface FeatherIconProps {
  icon: string;
  size?: string | number;
  className?: string;
  fill?: string;
  strokeWidth?: string | number;
  color?: string
  alt?:string
  onClick?: any
}

declare function FeatherIcon(prop: FeatherIconProps): JSX.Element;

export default FeatherIcon;
