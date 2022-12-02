import React from 'react';
import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorage} from "@mantine/hooks"


function ColorShell(props: any) {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
      key: 'mantine-color-scheme',
      defaultValue: 'light',
      getInitialValueInEffect: true,
    });
    const toggleColorScheme = (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  
    useHotkeys([['mod+J', () => toggleColorScheme()]]);
    return (
        <div>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
          {props.innerContent}
        
      </MantineProvider>
      </ColorSchemeProvider>
        </div>
    )
};
  
export default ColorShell;