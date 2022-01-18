import { CSSProperties } from "react";

// ChakraUI
import { useColorMode } from "@chakra-ui/react";

export default function CreativeCommons() {
  const { colorMode } = useColorMode();

  const filter = colorMode === "dark" ? "invert(1)" : "invert(0)";

  const style: CSSProperties = {
    filter,
    width: 20,
    height: 20,
    display: "inline",
    transform: "translateY(-2px)",
  };

  return (
    <>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAbrAAAG6wFMMZ5KAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAxxJREFUSIm11luIVlUUB/DfzKhTwQQW2nQhiHwJAiOYyKjEKGhSoyCyh4QIulHQjSBf6sGp6AKVURBERUlJBBH1EPSQhVA9dBG6aPegtBG6TdNUjs7Xw97Hs77t+Zzv0/EPh3PO3v+9/nuvtfdau093OBIrsBpLcRyG0cIvGMeneBOb8U+XdjtiGI9jMot080ziCZxwsKJr8UeD4b/wJd6VVvcFJhp4E7iuF8E+3F8Y+ROP4HzMaxgzgHPxcMNkn8L8bkRfDINm8CQW9TDxY/Eo9gY7b80mfm8g/4urexAsMap99c92Il4mrbCF/7D8EEQrnKE9/teXhCPwYyD0tClmwSj2ZLu/Y2HsvD2IvjSHohU2BPtjVeOAlAQqF59yGIQXq10+gcF5WCZlItiI74tBi3ANTscUPsImKVFUOBNrpKSxS9rFb4f+XdLmuhVD8v55SO2G0UJ0GX61f3L4BksyZ516U8ZnE/qDrRWh7zFSBmrhbwwG4lHYoU6D9+Au/JyF1uPCYGwrbpLiuUdy6dnB3nx16t0CX+Wf7cVqrwpGbwvtSzGSv1/J/dM4KXAu1Zx0tmf+16Tc28I7BWl9EB7RjM/Vru8GmzN/MsagryC1wne/ZrRm6S9Racz0Y2f+Ob4gRddfEL5PxLVSsdiW207GqYGzSnt8KyzO73F4L898SspgFYakY1Dl7THcgM9y29NYqQ7HNtws5fup3HZRsDegPstbSKWsGryymOFyKc2VR+UD9ea5r6F/RiqtEeeE/g1wXmh4roN77sTzUolcY/8SN4IH8AIelBJKiVjjL65cMJ4bdqsTw1xiIX5T32D2hfSOMJtXD4NwDGdbCBbg29B5yxyKlmXxmJKwSn1dmc7/h4qztF8EbuxEXBdI01I1OVisle7Xlb2NByL34RntR+N1nNaD4BKpMkUbr0nhnBV3a78lTuNlXImjG/hDuEJa1W7t53lM9ykVXILvipm38oR24hN8LJXOvQ28H3B5L4IRC6SSWF2Nunl25DGDDfb2oaxInTAg3UZWS8l/WCoWLfyUJ/Y+3sCHkosPiP8Btp0swL9OhkEAAAAASUVORK5CYII="
        alt="creative commons"
        style={style}
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAbrAAAG6wFMMZ5KAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAyNJREFUSImd1kmIXUUUBuDvvdcxjWIrQekkKoiIw86FoEgU0YUBTaKIbgKCCxURNSQGERGDEkVDK202ggtBlICioBFFXTjghEgcUHDniGlxiLYdTXcnaRdVN7dedVXnPX8o7q2q/z+n7qk6p27HYBjDelyOs7ES41jAFH7B53gV7+DfAe1WcSIewv7oZJA2g4ej9n/hBvxWMPwXvha+7G18hT8LvN9xyzAOu3ik4OxRrEGvoOnhoqjbl2mfxLKjOe3guUR0GDtx0hALX4EJHEzsvIVjlhJtS8gHsHEIhznW6t+Cp2vEa4QvbJxeUuGtxiZMxrYpjpVwnrBNjfNbc8Iovk8INxWMdHAv5iw+SHO4J3JyrNWGfZ+wFUewJTHybGX1dxcc5u2uinYy4WxvBntCAWhCfHpBeBpmE/FBvI4PM8ezOKWgPxnTkTON5XBxInyqsuLtmYOr4/iZha9+oGLjsYRzBezIBwrYk3A+TsYfLDj+tGLj0oTzBLwbO/uVc20Z5hPRRBxfLZTHBXyXzM9hpGKn4b/f1abCD1GU49TM0DfxuQ3HCSVzR+agtM/z+DG+r+wKNw3sLZDh+Kw/g3NwY+xvwR8ZZ6xiayp13KCUgyX0hLo9gpfw5hDaBgtd7ZeuqpD+zvpXYp2QelvjWB6V6Yqt8ficgve0h2t5gZwfrkWFAI87+uHqaWv3B11tehyLywqCeXyZje0VLvsGa5L3L4QCk+MCnBDf93SxO5m8tiAgVKm8PxPfr8P5ydxrFRvrck5aMmdxRkFUKpm78QYOJeMHlFNphXDym1+j0WZicyJ+obLirRbvc942V7QTCWdnOpFfi7cVxB3h6itdi7PC7VXCBm1UphUiskH7IzAvpE0Jq3CH9kfgdvVUvFBIx2aBN1d47te/j7WvGAQb8U9ib3IpcgfP6A/jyzh3CIdn4fnMxovKub3I+X3asDeh34XrtbmYYizO7dJfbA4LV2e3oKlivf4DlxqbEgrFZ0IxOVTgfav9YRgao0Ia/VowXGs/407l8nsEg94qI0JZvEoofePCPb6An4QIfIRX8IkQlSXxHxhERMHrqUw+AAAAAElFTkSuQmCC"
        alt="no attribution"
        style={style}
      />
    </>
  );
}
