{
    "bindings": [
      {
        "authLevel": "anonymous",
        "type": "httpTrigger",
        "direction": "in",
        "name": "req",
        "methods": ["get"],
        "route": "leaderboard"
      },
      {
        "type": "http",
        "direction": "out",
        "name": "res"
      }
    ]
  }