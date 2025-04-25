# Blazor Charts

O **Blazor Charts** é um pacote NuGet que facilita a criação de gráficos em aplicações Blazor utilizando o Chart.js.

# 📚 Documentação
[https://brendonniero.github.io/blazor-charts/](https://brendonniero.github.io/blazor-charts/)

## 📦 Instalação

Para instalar o pacote, utilize o seguinte comando:

```bash
dotnet add package BlazorChartsClassLibray --version 1.0.15
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

# 📌 Exemplos
## Gráfico de Linha
```bash
<LineGraph DataName="@DataName" Labels="@labels" 
           DataPoints="@data" BackgroundColors="@colors" />

@code {
    public string DataName = "Revenue";
    public List<string> labels = new() { "Jan", "Feb", "Mar", "Apr", "May" };
    public List<int> data = new() { 10, 50, 30, 55, 66 };
    public List<string> colors = new() { "#3fc598" };
}
```
## Gráfico de Barras Dupla
```bash
<DoubleBar DataName1="First" DataName2="Second" 
           Color1="#13f287" Labels="@labels" Color2="#646cff" 
           DataPoints1="@data1" DataPoints2="@data2" />

@code {
    public List<string> labels = new() { "Jan", "Feb", "Mar", "Apr", "May" };
    public List<int> data1 = new() { 100, 50, 30, 55, 66 };
    public List<int> data2 = new() { -50, -100, -50, -55, -96 };
}
```
## Gráfico Doughnut
```bash
<CharDoughnut DataName="Revenue" BackgroundColors="@colors" 
              DataPoints="@data" Labels="@labels" />

@code {
    public List<string> labels = new() { "Jan", "Feb", "Mar", "Apr", "May" };
    public List<int> data = new() { 10, 50, 30, 55, 66 };
    public List<string> colors = new() 
      { "#3fc598", "#646cff", "#ff5733", "#ffc300", "#ef436b" };
}
```
