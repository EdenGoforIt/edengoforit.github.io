---
title: Program Configuration
description: .NET and C# notes about Program Configuration.
---

# Program Configuration
## Add IOptions

```csharp
       services
                .AddOptions<DatabaseConfiguration>()
                .Configure<IConfiguration>((options, config) => config.Bind("Database", options));
```

