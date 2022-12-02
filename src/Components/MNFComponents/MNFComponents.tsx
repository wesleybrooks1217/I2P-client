import "./MNFComponentsShell.css"
import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorage} from "@mantine/hooks"
import AppShellExample from "./MNFComponentsShell"

function MNFComponents() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
        <Paper>
        <AppShellExample />
        </Paper>
      
      
    
      </MantineProvider >
      </ColorSchemeProvider>
    </div>
  );
}

export default MNFComponents;

