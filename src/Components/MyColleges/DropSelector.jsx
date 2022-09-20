import { MultiSelect, Button } from '@mantine/core';
import { Switch } from '@mantine/core';
import './myColleges.css'
const data = [
  { value: 'social', label: 'Social School' },
  { value: 'campus', label: 'Pretty Campus' },
  { value: 'athletic', label: 'Good Athletics' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

function DropSelector() {
  return (
    <div className='dropdown-selector'>
    <MultiSelect
      sx={{width: 260, marginLeft: 45, alignSelf: 'center'}}
      data={data}
      label="Category Chooser"
      placeholder="Scope in search"
    />
    <Switch
    sx={{marginTop: 25, marginLeft:20}}
      label="Made for me / Random" />
    <Button variant="light" color="blue" mt="md" radius="md" sx={{alignSelf: 'center', marginTop: 20, marginRight: 30, width: 110}}> Search </Button>
      </div>
  );
}

export default DropSelector;