# DataTables-balkan-string-sort-Plug-In
Plug-in for string sorting with Slovenian/Croatian/Serbian language

Character support: <strong>čćđšžČĆĐŠŽ</strong>

## Example
Load script:

`<script src="dataTables.balkanSort.js"></script>`

Sort column:

``` javascript
$('#example').DataTable({
  'columnDefs': [{
	   type: 'balkan-string', targets: 0 // use balkan sort for first column
  }]
});
```
