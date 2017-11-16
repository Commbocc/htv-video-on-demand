# HTV Video On-Demand

[Govwebcast Server 10 Video Portal Customization Guide](https://storage.googleapis.com/bc3_production_blobs/657d9a40-b4cc-11e7-83b0-a0369f6beabe?GoogleAccessId=bc3-production-storage%40bc3-production.iam.gserviceaccount.com&Expires=1509634243&Signature=CUAZdjnSNaIz9k3A7IlWYOymazH06uePiLgpD968gdxB%2B3SjnWnAF%2B9MnXwU%2BYJS%2FCbmoQuVynO6PgbY3KBFIFw12v%2F4cPwWjdtH62UHjZjWjXFLp%2B3EYSGbO3uBkq15xpv5Ks%2FCTU3n6juMxO83GKhfnesXAJ%2F0fKhAvAEoZLnf4j5XuolIz8VHmhBaQyxHUsQEBurAHhb7HrzCkPOt%2FvLgEZPQKhJX%2FeEWm9hYDm9EojLE7%2FFPEglgoxKBId0ExeYfgVrEifqpeYmEChkUN348a%2Bor0zjLe3iAr%2BtgrHiYob9mNr0AYplIEqxDaFrmAmseahT7l%2ByXrJlWR%2F1v%2BA%3D%3D&response-content-type=application%2Fpdf&response-content-disposition=inline%3B+filename%3D%22Govwebcast+Server+10+Video+Portal+Customization+Guide.pdf%22%3B+filename%2A%3DUTF-8%27%27Govwebcast%2520Server%252010%2520Video%2520Portal%2520Customization%2520Guide.pdf)

## Main Layout

The [main layout](https://github.com/Commbocc/htv-video-on-demand/blob/master/_layouts/main.html) acts as a wrapper for the Video Portal and Video Player landing pages.

## Landing Pages

Landing pages have several components that can be included as specified in the customization guide:

### Video Portal

* banner
* search_tool
* live_meeting_video_listing
* on_demand_video_listing

### Video Player

* video_player
* synchronized_agenda_items
* agenda_document

## Components

Each component file mentioned above, found in the [`_includes`](https://github.com/Commbocc/htv-video-on-demand/tree/master/_includes) directory, contains a reference to a recommended placement of where a component might reside in the HTML code. These are designated with the following comment tag:

```html
<!-- GEOWEBCAST_COMPONENT -->
```

As an example look at the proposed [`synchronized_agenda_items`](https://github.com/Commbocc/htv-video-on-demand/blob/master/_includes/synchronized_agenda_items.html) component. HTML content above the comment tag in the node tree acts as a wrapper for the component and content below the tag in the node tree is a recommendation of how the component might be coded.

```html
<aside id="SynchronizedAgendaItems" class="">

	<!-- GEOWEBCAST_COMPONENT -->
	<ol class="py-2 pr-0 mb-0 small">
		<!-- past items -->
		{% for n in (1..5) %}
		<li class="sync-agenda-item sync-agenda-item-past">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</li>
		{% endfor %}

		<!-- active item -->
		<li class="sync-agenda-item sync-agenda-item-active">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</li>

		<!-- default items -->
		{% for n in (1..20) %}
		<li class="sync-agenda-item">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</li>
		{% endfor %}
	</ol>

</aside>
```
