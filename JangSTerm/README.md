# JangS Term
A terminal system based on Xterm.js.
Very lightweight and easy to use.

# How to setup in your app.

The default app already has JangSTerm setup...
If you do not use the default app, you can copy JangSTerm.js and refrence it in your html file.
You can also refrence in your app, JangSTerm/term.js, and JangSTerm/term.css to mount the files.

# Setting up a terminal

Use this to setup the terminal:
```
<!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="node_modules/xterm/css/xterm.css" />
      <script src="node_modules/xterm/lib/xterm.js"></script>
    </head>
    <body>
      <div id="terminal"></div>
      <script>
        var term = new Terminal();
        term.open(document.getElementById('terminal'));
        term.write('JangSTerm 1.0.00 Is now activated!')
      </script>
    </body>
  </html>
```

This creates a new JangS terminal.

You should now be able to use the new JangS Terminal! See documentation on how
to do more cool things with it!
