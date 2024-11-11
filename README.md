# Instalacja
Po prostu wpisz `npm install`

## Organizacja plików, folderów oraz kodu w projekcie

### Podział folderów:

#### app:

- Proste komponenty, które nie mają logiki, zwierają SEO i pojedynczy komponent głównego wyglądu danej strony
- nazwy plików są połączone z wyglądem linku, więc powinny być w języku polskim oraz pisane w notacji `kebab Case`

#### components:

- komponenty, które są re-używalne dla całego projektu, jak np. ogólny komponent Dialogu (Modal), layout, button itp.

#### features:

- trzymamy tam komponenty pliki/foldery związane z daną funkcjonalnością systemu lub ewentualnie dany router jeśli jest
  mały. Każdy folder funkcjonalności ma swój folder `components` `services` `types` `hooks` itd., w folderze moze
  znajdować się główny plik typu `FooViews.tsx` oraz np `router.ts` w którym są linki do endpoint'ów api itp

#### hooks:

- hooki, które są używane w całym projekcie

#### lib:

- drobne funkcje pomocnicze bez efektów ubocznych

#### services:

- funkcje do łączenia się do API

#### types:

- pliki, które zawierają interfejsy/type

#### context:

- pliki, używane jako Providery do kontekstu aplikacji, zalecane, aby taki plik kończył się także na `[smth]Context.tsx`

### Nazewnictwo:

#### Foldery:

Wszystkie foldery w projekcie powinny być nazywane po angielsku w notacji `kebab Case` czyli
np.: `add-to-cart-button` / `search-bar` itp.

#### Pliki:

Pliki, zawierające komponent Reacto'wy, powinny być pisane w notacji `PascalCase`, pozostałe pliki z innymi
funkcjami piszemy w notacji `camelCase`

#### Kod:

1. Interfejsy nazywamy zależnie od miejsca gdzie się znajdują:
    1. Wewnątrz Reactowego komponentu jest to `Props` (dla właściwości które wchodzą do komponentu)
    2. Wewnątrz hook-a jest to `Props` oraz `State` dla zwracanych właściwości
    3. Wewnątrz zwykłej funkcji **nie używamy wyżej wymienionych nazw**, ponieważ są one zarezerwowane dla komponentów i
       hook-ów. Możemy użyć
       np. `AddTwoNumberProps` oraz `AddTwoNumbersReturnProps` dla funkcji dodającej dwie liczby.
    4. Nie używamy nazewnictwa z innych języków np. z rodziny `C` => `IProps`/`IInstitutions`
2. Formularze
    1. Interfejsy danych formularzy powinny mieć w nazwie `Values`, np. `B2BFormValues`

### Kod:

#### Interfejsy

1. Jeżeli trzeba rozszerzyć interfejs lub dokonać na nim większej zmiany wówczas tworzymy typ.

#### Export

1. Nie używamy `export default`! Jedynymi wyjątkami są strony z `pages`/`app` route oraz komponenty, które są
   importowane poprzez `dynamic`.

#### Stylowanie

1. Nie używamy `px`. Wszystkie rozmiary powinny brać się z jednostek Mui.
2. Nie używamy ułamków rozmiarów. Tzn. element nie może mieć `borderRadius: 2.5;`, powinien to być dzielnik
   liczby 4, np. `borderRadius: 4;`/`borderRadius: 1;`.
