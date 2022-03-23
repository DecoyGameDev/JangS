# JangS Term
A terminal system based on Xterm.js.
Very lightweight and easy to use.

# How to setup in your app.

The default app already has JangSTerm setup...
If you do not use the default app, you can copy JangSTerm.js and refrence it in your html file.

# Setting up a terminal

Use this to setup the terminal:

`
<!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="node_modules/xterm/css/xterm.css" />
      <script src="node_modules/xterm/lib/xterm.js"></script>
    </head>
    <body>
      <div id="terminal"></div>
      <script>
        var jangs_write = write();
        var jOPFILE = open();
        var jterm = new Terminal();
        jterm.jOPFILE(document.getElementById('terminal'));
        jterm.jangs_write('JangSTerm version 1.0.00 is now activated!')
      </script>
    </body>
  </html>
`

This creates a new JangS terminal.

You should now be able to use the new JangS Terminal! See documentation on how
to do more cool things with it!