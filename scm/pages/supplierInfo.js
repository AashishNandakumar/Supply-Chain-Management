import { ChakraProvider } from "@chakra-ui/react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function Home2() {
  const steps = [
    { title: "Initialized", description: "Contact Info" },
    { title: "On going", description: "Date & Time" },
    { title: "Delivered", description: "Select Rooms" },
  ];

  function Example() {
    const { activeStep } = useSteps({
      index: 2,
      count: steps.length,
    });

    return (
      <Stepper index={activeStep} colorScheme="yellow" size="md">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
  }

  return (
    <>
      <div>
        <ChakraProvider>
          <Example />
          <Example />
        </ChakraProvider>
      </div>
    </>
  );
}
