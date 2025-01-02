import React, { memo } from 'react'
type Props = {
    variant: "filled" | "outlined" | "transparent" | "active" | "dark-filled";
    children?: React.ReactNode;
    className?: string;
    onClick?:()=>void;
    active?:Boolean
}
const variantStyles ={

}
const activeStyle = "bg-cyan-400/20 dark:text-cyan-400 text-cyan-500";

 function Icon({children,variant,onClick,active,className}:Props) {
    const iconStyle = variantStyles[variant];
    const appliedActiveStyle = variant === "transparent" && active ? activeStyle :"";
  return (
    <div className={`${iconStyle} ${className} `}>
      {children}
    </div>
  )
}
export default memo(Icon);