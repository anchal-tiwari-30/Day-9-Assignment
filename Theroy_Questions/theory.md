1. What is NodeJS?<br> 
Answer : Node.js is an open-source, server-side runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server and build scalable and efficient network applications. Node.js provides an event-driven, non-blocking I/O model that makes it well-suited for handling concurrent requests.
***

2. What is V8 Engine?<br>
Answer : V8 is an open-source JavaScript engine developed by Google. It is written in C++ and is used in various platforms, including Node.js and web browsers like Chrome. The V8 engine compiles JavaScript code into machine code and executes it with high performance. It provides features like Just-In-Time (JIT) compilation and optimized memory management.
***

3. What is Event Loop in NodeJS?<br>
Answer : The event loop is a key component of Node.js that enables asynchronous, non-blocking behavior. It is responsible for handling and dispatching events, such as I/O operations, timers, and callbacks, in a single-threaded environment. The event loop allows Node.js to efficiently handle multiple concurrent requests without blocking the execution of other tasks.
***

4. What is the use of tsconfig.json file?<br>
Answer : The `tsconfig.json` file is used in TypeScript projects to configure the TypeScript compiler (`tsc`). It specifies various compiler options and project settings, such as the target ECMAScript version, module system, output directory, and source file patterns. The `tsconfig.json` file helps in organizing and managing the TypeScript project's compilation process.
***

5. What are the methods provided by fs module to manipulate files?<br>
Answer : The `fs` module in Node.js provides various methods to manipulate files:

- `fs.readFile()`: Reads the content of a file asynchronously.
- `fs.readFileSync()`: Reads the content of a file synchronously.
- `fs.writeFile()`: Writes data to a file asynchronously.
- `fs.writeFileSync()`: Writes data to a file synchronously.
- `fs.appendFile()`: Appends data to a file asynchronously.
- `fs.appendFileSync()`: Appends data to a file synchronously.
- `fs.unlink()`: Deletes a file asynchronously.
- `fs.unlinkSync()`: Deletes a file synchronously.
- `fs.rename()`: Renames a file or moves it to a different location asynchronously.
- `fs.renameSync()`: Renames a file or moves it to a different location synchronously.
***

6. What is API?<br>
Answer : Application programming interface, is a set of defined rules that enable different applications to communicate with each other.
***

7. What is JSON format?<br>
Answer : JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language and represents data as key-value pairs, arrays, and nested objects. JSON is widely used in web APIs for transferring data between clients and servers.
***

8. Why do we use JSON format for API<br>
Answer : JSON is a popular choice for APIs due to its simplicity, readability, and interoperability across different programming languages. It provides a standardized format for representing structured data, making it easy to serialize and deserialize objects. JSON's lightweight nature and support for nested structures make it suitable for transmitting data over the network efficiently. Additionally, JSON is supported natively in many programming languages, making it convenient for developers to work with.
***

9. What is a Framework?<br>
Answer : A framework is a reusable set of libraries, tools, and conventions that provides a foundation for building applications. It offers pre-defined structures and functionalities to streamline the development process and promote code organization, scalability, and maintainability. Frameworks typically provide solutions to common challenges and abstract away low-level implementation details, allowing developers to focus on application-specific logic. Examples of popular web frameworks include Express.js, Django, Ruby on Rails, and Angular.
***

10. How does HTTP communication work?<br>
Answer : The basic steps of an HTTP communication are as follows:
* The client initiates a TCP/IP connection to the server using the server's IP address and port.
* The client sends an HTTP request, which consists of a request line, headers, and an optional message body. The request line includes the HTTP method (e.g., GET, POST), the requested URL, and the HTTP version.
* The server receives the request, processes it, and generates an HTTP response.
* The server sends the HTTP response back to the client, which includes a response status code, headers, and an optional response body.
* The client receives the response and processes it accordingly, such as rendering HTML content or handling data from an API.
***

11. What is Middleware in ExpressJS?<br>
Answer : Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client.We can use middleware functions for different types of processing tasks required for fulfilling the request like database querying, making API calls, preparing the response, etc