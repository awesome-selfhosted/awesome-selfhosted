import java.util.Scanner;

class Application {
    private String name;
    private String version;

    public Application(String name, String version) {
        this.name = name;
        this.version = version;
    }

    public String getName() {
        return name;
    }

    public String getVersion() {
        return version;
    }
}

public class ApplicationManager {
    private static final int MAX_APPLICATIONS = 100;
    private static Application[] applications = new Application[MAX_APPLICATIONS];
    private static int appCount = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\nApplication Management System");
            System.out.println("1. Add Application");
            System.out.println("2. View Applications");
            System.out.println("3. Search Application");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    if (appCount < MAX_APPLICATIONS) {
                        System.out.print("Enter application name: ");
                        String name = scanner.nextLine();
                        System.out.print("Enter application version: ");
                        String version = scanner.nextLine();
                        Application newApp = new Application(name, version);
                        applications[appCount] = newApp;
                        appCount++;
                        System.out.println("Application added successfully.");
                    } else {
                        System.out.println("Maximum applications limit reached.");
                    }
                    break;
                case 2:
                    displayApplications();
                    break;
                case 3:
                    searchApplication();
                    break;
                case 4:
                    System.out.println("Thank you for using Application Management System. Goodbye!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void displayApplications() {
        System.out.println("\nList of Applications:");
        for (int i = 0; i < appCount; i++) {
            System.out.println((i + 1) + ". " + applications[i].getName() + " (Version: " + applications[i].getVersion() + ")");
        }
    }

    private static void searchApplication() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter application name to search: ");
        String searchName = scanner.nextLine();
        boolean found = false;
        for (int i = 0; i < appCount; i++) {
            if (applications[i].getName().equalsIgnoreCase(searchName)) {
                System.out.println("Application found:");
                System.out.println("Name: " + applications[i].getName());
                System.out.println("Version: " + applications[i].getVersion());
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("Application not found.");
        }
    }
}
