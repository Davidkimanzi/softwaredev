import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class TimetableApp extends JFrame implements ActionListener {
    private JLabel courseLabel, instructorLabel, startTimeLabel, endTimeLabel, dayOfWeekLabel;
    private JTextField courseField, instructorField, startTimeField, endTimeField;
    private JComboBox<String> dayOfWeekComboBox;
    private JButton addCourseButton;
    private JTextArea timetableArea;

    public TimetableApp() {
        // Set up the frame
        setTitle("Timetable App");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        // Initialize components
        courseLabel = new JLabel("Course Name:");
        instructorLabel = new JLabel("Instructor Name:");
        startTimeLabel = new JLabel("Start Time:");
        endTimeLabel = new JLabel("End Time:");
        dayOfWeekLabel = new JLabel("Day of the Week:");

        courseField = new JTextField(15);
        instructorField = new JTextField(15);
        startTimeField = new JTextField(10);
        endTimeField = new JTextField(10);

        String[] daysOfWeek = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
        dayOfWeekComboBox = new JComboBox<>(daysOfWeek);

        addCourseButton = new JButton("Add Course");
        addCourseButton.addActionListener(this);

        timetableArea = new JTextArea(10, 30);
        timetableArea.setEditable(false);

        // Add components to the frame
        add(courseLabel);
        add(courseField);
        add(instructorLabel);
        add(instructorField);
        add(startTimeLabel);
        add(startTimeField);
        add(endTimeLabel);
        add(endTimeField);
        add(dayOfWeekLabel);
        add(dayOfWeekComboBox);
        add(addCourseButton);
        add(new JScrollPane(timetableArea));
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == addCourseButton) {
            String courseName = courseField.getText();
            String instructorName = instructorField.getText();
            String startTime = startTimeField.getText();
            String endTime = endTimeField.getText();
            String dayOfWeek = (String) dayOfWeekComboBox.getSelectedItem();

            // Add the course to the timetable display
            String courseInfo = String.format("Course: %s\nInstructor: %s\nTime: %s - %s\nDay: %s\n\n",
                    courseName, instructorName, startTime, endTime, dayOfWeek);
            timetableArea.append(courseInfo);

            // Clear the input fields
            courseField.setText("");
            instructorField.setText("");
            startTimeField.setText("");
            endTimeField.setText("");
            dayOfWeekComboBox.setSelectedIndex(0);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                TimetableApp app = new TimetableApp();
                app.setVisible(true);
            }
        });
    }
}
