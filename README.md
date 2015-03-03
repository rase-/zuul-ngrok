zuul-ngrok
==========

Uses `ngrok` as a tunneling service to run [Zuul](http://github.com/defunctzombie/zuul) exposed to the world, also used when running tests in Saucelabs.

Any `ngrok` node module options can be specified in `.zuul.yml` in the `tunnel` section. For details see the [module pages](https://www.npmjs.com/package/ngrok).

Here is an example:

```
tunnel:
  type: ngrok
  authtoken: JnawIksKFkXQzrxSjIjQ
  subdomain: doge
```

and another one:

```
tunnel:
  type: ngrok
  authtoken: JnawIksKFkXQzrxSjIjQ
  proto: tcp
```

In fact tcp-mode is a special case. If `proto` is specified, the `tcp://` prefix is replaced with `http://` for the Zuul tests to run.
