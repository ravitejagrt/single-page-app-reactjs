export const blogPosts = [];

for(let i=0; i<3; i++){
	blogPosts.push({
		id: (i+1),
		title: 'Blog '+(i+1),
		summaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non neque augue. Vivamus eu sem elementum, facilisis augue et, rhoncus est. Aliquam erat volutpat. Sed fermentum tellus at quam finibus, non vulputate nunc dignissim. Cras vulputate tincidunt tincidunt. Pellentesque dolor magna, semper ac nisi vitae, elementum ultrices mauris. Proin dolor dolor, tincidunt vitae luctus at, tempor a diam. Morbi bibendum mattis lobortis. Donec venenatis sagittis odio ut rutrum. Quisque faucibus consectetur risus vitae interdum. Nam id blandit ipsum, nec rhoncus felis...',
		content: '<p style="margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non neque augue. Vivamus eu sem elementum, facilisis augue et, rhoncus est. Aliquam erat volutpat. Sed fermentum tellus at quam finibus, non vulputate nunc dignissim. Cras vulputate tincidunt tincidunt. Pellentesque dolor magna, semper ac nisi vitae, elementum ultrices mauris. Proin dolor dolor, tincidunt vitae luctus at, tempor a diam. Morbi bibendum mattis lobortis. Donec venenatis sagittis odio ut rutrum. Quisque faucibus consectetur risus vitae interdum. Nam id blandit ipsum, nec rhoncus felis.</p>'+
			'<p style="margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">Proin molestie at ipsum et porta. Vestibulum at quam rhoncus enim posuere hendrerit a vel dolor. Proin eu felis non lectus mattis fermentum. Aenean accumsan volutpat enim. Vivamus vehicula sed felis a sagittis. Pellentesque rhoncus interdum ligula. Curabitur hendrerit posuere erat ut pretium. Nunc quis lectus lectus. Cras vel scelerisque lectus. Donec eleifend orci at justo hendrerit, ut porttitor risus tincidunt. Praesent eu leo sed enim laoreet vehicula. Sed dignissim mollis venenatis. Curabitur libero orci, rutrum vel dui vitae, lobortis feugiat tellus. Mauris et urna auctor metus pulvinar convallis. Mauris in nunc tortor. Nam sodales sagittis ex ut porta.</p>'+
			'<p style="margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">Curabitur scelerisque, nibh luctus gravida aliquam, velit ex tincidunt sapien, in maximus diam dolor vitae nunc. Donec malesuada enim dignissim, ullamcorper tortor quis, varius ipsum. Aliquam eleifend, massa sit amet pharetra elementum, ante elit fermentum quam, vitae ultrices elit felis id ligula. Pellentesque vel tincidunt diam. Aenean at scelerisque orci. Maecenas finibus magna nulla, eget interdum leo dictum et. Cras ut tincidunt augue, ac euismod leo.</p>'+
			'<p style="margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">Proin ac mi sed risus auctor faucibus ut in mi. Mauris suscipit tortor sit amet purus mattis, a sollicitudin velit viverra. Vestibulum ex turpis, consequat eget risus non, consequat accumsan nunc. Suspendisse dictum sapien sed turpis consequat accumsan. Praesent tristique luctus augue quis luctus. Sed non diam tellus. Sed orci sapien, lobortis nec neque eget, dictum porta orci. Nulla ac sodales quam. Nulla iaculis a purus ac interdum. Duis eu urna et tellus lobortis efficitur ut sit amet ante. Praesent vitae leo quis nisi gravida commodo. Curabitur pharetra ante urna, sed cursus nisi tristique eu. Duis malesuada ante sapien, sed volutpat ipsum imperdiet ac. Maecenas luctus mauris eget mollis faucibus. Nulla ac magna ante. Fusce dapibus fermentum bibendum.</p>'+
			'<p style="margin: 0px 0px 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">Mauris dictum hendrerit nisi, auctor consectetur tortor elementum id. Quisque at lectus eget urna cursus aliquam. Sed venenatis est dui, nec scelerisque lorem porta id. Curabitur nec elementum libero, ac hendrerit risus. Proin bibendum odio vitae magna vulputate ornare. Maecenas sit amet viverra nulla. Aenean cursus mollis nunc eget sodales.</p>',
		imageUrl : '/assets/images/blog'+(i+1)+'.jpg'
	})
}
	
