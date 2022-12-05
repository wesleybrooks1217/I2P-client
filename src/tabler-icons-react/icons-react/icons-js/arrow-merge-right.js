import * as React from "react";

function IconArrowMergeRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-merge-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 8l-4 -4l-4 4" /><path d="M12 20v-16" /><path d="M18 18c-4 -1.333 -6 -4.667 -6 -10" /></svg>;
}

export default IconArrowMergeRight;