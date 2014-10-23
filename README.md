lookout
=======

Learning Ruby by koans. Bored of manually executing path_to_enlightenment.rb.

Watch a directory for changes and execute a script.

Pop a symbolic link in your path:

    ln -s /path/to/logger.js /usr/local/bin/logger


#Usage:
    lookout [options]

    Options:

    -h, --help             output usage information
    -w, --watch <f>        Script or directory to watch
    -s, --script <s>       Script to execute e.g. path_to_enlightenment.rb
    -i, --interpreter <i>  Interpreter to use

    e.g. logger -w /path/to/file/or/directory -s /path/to/enlightenment.rb -i ruby
