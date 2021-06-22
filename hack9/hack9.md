# Task

The theme for Hack 9 is security.  You have been approached by a gang of criminals, who would like you to build a backdoor into the code that you're currently producing.

The task is to create an application which performs a simple function: adds two numbers together.  The program must be secured in some way (e.g. password, MFA, biometrics, voice recognition).

You then need to leave a series of "back doors" into the program: the more subtle, the better.


# Suggestions

* Create a simply text based application that requires a username and password, but given a certain key combination just logs you in directly.

* A web-site that provides a simply password log-in, but which can be bypassed by simply entering the relevant URL directly.

* An application that stores usernames and passwords in a database, and allows SQL injection to insert a new user, which can then be used to log-in.

