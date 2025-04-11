# Blazor Charts

O **Blazor Charts** é um pacote NuGet que facilita a criação de gráficos em aplicações Blazor utilizando o Chart.js.

## 📦 Instalação

Para instalar o pacote, utilize o seguinte comando:

```bash
dotnet add package BlazorChartsClassLibray --version 1.0.14
```

Em seguida, importe os scripts necessários no seu index.html (Blazor WebAssembly) ou _Host.cshtml (Blazor Server):

```bash
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="_content/BlazorChartsClassLibray/chart.js"></script>
```

# 🚀 Como Usar
No seu arquivo .razor, importe o namespace:

```bash
@using BlazorChartsClassLibray.Components;
```

# 📌 Exemplo Completo
```bash
<LineGraph DataName="@DataName" Labels="@labels" DataPoints="@data" BackgroundColors="@colors"/>

@code {
    public string DataName = "Faturamento";
    public List<string> labels = new() { "Jan", "Fev", "Mar", "Abr", "Mai",};
    public List<int> data = new() { 10, 50, 30, 55, 66 };
    public List<string> colors = new() { "#3fc598" };
}
```
# 📚 Documentação
Em desenvolvimento...
