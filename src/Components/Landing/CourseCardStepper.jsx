import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function CourseComponentStepper() {
  const [active, setActive] = useState(2);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Past Class" description="Previous Reqs">
          Pre-Calculus
        </Stepper.Step>
        <Stepper.Step label="" description="">
          AP Calculus AB
        </Stepper.Step>
        <Stepper.Step label="For the Future" description="Post-Class Track">
         AP Calculus BC
        </Stepper.Step>
        <Stepper.Completed>
           Multivariable Calculus, Linear Algebra
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Last Year</Button>
        <Button onClick={nextStep}>Next Year</Button>
      </Group>
    </>
  );
}

export default CourseComponentStepper;