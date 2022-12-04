import { createStyles, SegmentedControl, ActionIcon } from '@mantine/core';
import { useState } from 'react';
import { Send } from 'tabler-icons-react';
import './SidePicker.css';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    boxShadow: theme.shadows.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
    }`,
  },


  active: {
    backgroundImage: theme.fn.linearGradient(133, 'blue', 'red', 'orange'),
  },

  control: {
    border: '0 !important',
  },

  labelActive: {
    color: `${theme.white} !important`,
  },
}));

function SidePicker() {
  const { classes } = useStyles();
  const [value, setValue] = useState('Favorite');
  return (

    <div className='side_picker_root'>

    
      <SegmentedControl
        radius="xl"
        size="md"
        data={['Favorite', 'Like', 'Dislike']}
        classNames={classes}
        value={value}
        onChange={setValue}
      />

      <ActionIcon variant='filled'
      className='side_picker_btn'>
        <Send size={16}/>
      </ActionIcon>

    </div>
  );
};

export default SidePicker;