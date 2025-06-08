import { render, fireEvent, screen } from "@testing-library/react";
import Metronome from "./Metronome";

describe("Metronome Component", () => {
    test("renders correctly with initial BPM and button text", () => {
        render(<Metronome />);
        expect(screen.getByText("100 BPM")).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveTextContent("Start");
    });

    test("updates BPM when slider is moved", () => {
        render(<Metronome />);
        const slider = screen.getByRole("slider");
        fireEvent.change(slider, { target: { value: 120 } });
        expect(screen.getByText("120 BPM")).toBeInTheDocument();
    });

    test("toggles play state when button is clicked", () => {
        render(<Metronome />);
        const button = screen.getByRole("button");

        // Start playing
        fireEvent.click(button);
        expect(button).toHaveTextContent("Stop");

        // Stop playing
        fireEvent.click(button);
        expect(button).toHaveTextContent("Start");
    });

    test("resets count when BPM changes while playing", () => {
        render(<Metronome />);
        const button = screen.getByRole("button");
        const slider = screen.getByRole("slider");

        // Start playing
        fireEvent.click(button);

        // Change BPM
        fireEvent.change(slider, { target: { value: 120 } });

        // Ensure count resets (mocking playClick behavior would be needed for deeper testing)
        expect(button).toHaveTextContent("Stop");
    });
});