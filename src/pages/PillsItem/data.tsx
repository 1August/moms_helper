import temp from '@/assets/Mucaltin.png'
import { Pill } from '@/types/Pill.ts'

export const products: Pill[] = [
	{
		id: '1',
		title: 'Мукалтин (Mucaltin)',
		shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, sunt.',
		description: 'Таблетки серого или серого с коричневатым оттенком цвета, с более темными и более светлыми вкраплениями, с двояковыпуклой поверхностью, круглой формы.',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis culpa debitis earum eos' +
			' esse facilis fugit incidunt laudantium minima minus, modi, officia porro repellendus sunt. Asperiores beatae' +
			' commodi consequuntur doloremque eligendi ex fugit illo in incidunt iste iusto labore laborum magni minima nihil nulla numquam omnis, perspiciatis porro possimus praesentium provident quam quas, sequi ullam veritatis voluptatibus! Est et, exercitationem hic qui repellat voluptates voluptatibus! Ab aliquid assumenda at cupiditate distinctio dolor et exercitationem in iusto labore laudantium maxime minus necessitatibus nesciunt numquam, placeat, quibusdam repellendus repudiandae sapiente sed sit tempore ullam voluptate! Ea inventore nisi numquam quasi unde. Ad animi aspernatur aut blanditiis cumque delectus distinctio dolor dolorem dolorum esse eveniet expedita fugiat ipsa laudantium maiores molestias nemo nihil nobis nulla obcaecati optio placeat quae, ratione recusandae reiciendis sed velit voluptatibus? Accusantium culpa dolor eveniet perferendis qui, quidem repudiandae sit temporibus? Dignissimos dolores ipsum nam totam velit! Iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis culpa debitis earum eos esse facilis fugit incidunt laudantium minima minus, modi, officia porro repellendus sunt. Asperiores beatae commodi consequuntur doloremque eligendi ex fugit illo in incidunt iste iusto labore laborum magni minima nihil nulla numquam omnis, perspiciatis porro possimus praesentium provident quam quas, sequi ullam veritatis voluptatibus! Est et, exercitationem hic qui repellat voluptates voluptatibus! Ab aliquid assumenda at cupiditate distinctio dolor et exercitationem in iusto labore laudantium maxime minus necessitatibus nesciunt numquam, placeat, quibusdam repellendus repudiandae sapiente sed sit tempore ullam voluptate! Ea inventore nisi numquam quasi unde. Ad animi aspernatur aut blanditiis cumque delectus distinctio dolor dolorem dolorum esse eveniet expedita fugiat ipsa laudantium maiores molestias nemo nihil nobis nulla obcaecati optio placeat quae, ratione recusandae reiciendis sed velit voluptatibus? Accusantium culpa dolor eveniet perferendis qui, quidem repudiandae sit temporibus? Dignissimos dolores ipsum nam totam velit! Iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis culpa debitis earum eos esse facilis fugit incidunt laudantium minima minus, modi, officia porro repellendus sunt. Asperiores beatae commodi consequuntur doloremque eligendi ex fugit illo in incidunt iste iusto labore laborum magni minima nihil nulla numquam omnis, perspiciatis porro possimus praesentium provident quam quas, sequi ullam veritatis voluptatibus! Est et, exercitationem hic qui repellat voluptates voluptatibus! Ab aliquid assumenda at cupiditate distinctio dolor et exercitationem in iusto labore laudantium maxime minus necessitatibus nesciunt numquam, placeat, quibusdam repellendus repudiandae sapiente sed sit tempore ullam voluptate! Ea inventore nisi numquam quasi unde. Ad animi aspernatur aut blanditiis cumque delectus distinctio dolor dolorem dolorum esse eveniet expedita fugiat ipsa laudantium maiores molestias nemo nihil nobis nulla obcaecati optio placeat quae, ratione recusandae reiciendis sed velit voluptatibus? Accusantium culpa dolor eveniet perferendis qui, quidem repudiandae sit temporibus? Dignissimos dolores ipsum nam totam velit! Iste.',
		categories: [
			{
				id: '1001',
				label: 'Секретолитики и стимуляторы моторной функции дыхательных путей',
			},
			// {
			// 	id: 1002,
			// 	label: 'таблетки шипучие',
			// },
		],
		src: temp,
		alt: 'Lorem alt',
		stars: 4.2,
		tabs: [
			{
				value: 'tab1',
				label: 'Tab 1',
				component: () => <div>
					<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, deserunt eaque
						excepturi
						ipsum, iste minus molestiae odio omnis placeat, rem tempore ut voluptatum! Ad aliquid dicta doloribus enim
						eveniet
						excepturi explicabo, facilis in inventore itaque libero maiores, nesciunt optio qui quos sequi sunt veniam!
						Fugit
						mollitia nam pariatur perferendis recusandae saepe tempora? Aperiam, asperiores beatae corporis nam
						praesentium
						velit. Ad at dolore ea et id incidunt ipsa minima molestias mollitia nam nisi nulla obcaecati praesentium
						provident suscipit, tempora voluptas. A alias aliquam amet dignissimos et eum fugit illo ipsam molestias
						nemo,
						nisi non officia perferendis quae quam sit soluta vitae!</h1>
					<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, deserunt eaque
						excepturi
						ipsum, iste minus molestiae odio omnis placeat, rem tempore ut voluptatum! Ad aliquid dicta doloribus enim
						eveniet
						excepturi explicabo, facilis in inventore itaque libero maiores, nesciunt optio qui quos sequi sunt veniam!
						Fugit
						mollitia nam pariatur perferendis recusandae saepe tempora? Aperiam, asperiores beatae corporis nam
						praesentium
						velit. Ad at dolore ea et id incidunt ipsa minima molestias mollitia nam nisi nulla obcaecati praesentium
						provident suscipit, tempora voluptas. A alias aliquam amet dignissimos et eum fugit illo ipsam molestias
						nemo,
						nisi non officia perferendis quae quam sit soluta vitae!</h1>
					<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, deserunt eaque
						excepturi
						ipsum, iste minus molestiae odio omnis placeat, rem tempore ut voluptatum! Ad aliquid dicta doloribus enim
						eveniet
						excepturi explicabo, facilis in inventore itaque libero maiores, nesciunt optio qui quos sequi sunt veniam!
						Fugit
						mollitia nam pariatur perferendis recusandae saepe tempora? Aperiam, asperiores beatae corporis nam
						praesentium
						velit. Ad at dolore ea et id incidunt ipsa minima molestias mollitia nam nisi nulla obcaecati praesentium
						provident suscipit, tempora voluptas. A alias aliquam amet dignissimos et eum fugit illo ipsam molestias
						nemo,
						nisi non officia perferendis quae quam sit soluta vitae!</h1>
				</div>,
			},
			{
				value: 'tab2',
				label: 'Tab 2',
				component: () => <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorum facere
					libero
					natus numquam sapiente sequi ullam vero. Ea, recusandae, ullam? Consectetur doloremque eveniet fuga nisi omnis
					porro quod quos repellendus soluta tenetur. Consequatur, culpa delectus dolor et in nobis quaerat. Aliquid
					commodi
					corporis distinctio dolores ipsam nihil repellat? Aliquam asperiores aspernatur aut blanditiis consectetur
					ducimus
					ea eaque est minus necessitatibus non nostrum odio, officia optio qui quisquam reprehenderit rerum sed soluta
					veniam. A accusamus, accusantium, architecto beatae consequatur corporis delectus deserunt eius fugiat hic
					illum
					in magnam molestias obcaecati odit officiis optio perferendis quod rem sed sequi ullam unde?</h1>,
			},
			{
				value: 'tab3',
				label: 'Tab 3',
				component: () => <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate maxime molestiae
					necessitatibus, nemo veritatis vitae voluptatibus? Accusamus accusantium amet dicta magnam magni. Autem
					consectetur, doloribus eos impedit in incidunt iusto laborum molestiae neque nisi nostrum odio officia placeat
					quisquam quod, reiciendis repellat voluptates. Asperiores atque consectetur cupiditate debitis dolore eligendi
					eos
					et iure maiores molestiae necessitatibus non officiis provident qui quibusdam recusandae repellendus rerum
					sunt
					tempora, voluptatem. Amet animi consequatur corporis cum debitis distinctio eligendi esse et expedita facere
					illum
					incidunt inventore ipsam libero molestiae nam nihil nisi nobis optio perferendis quam, repellat repudiandae
					rerum
					sit sunt vitae voluptas voluptatibus.</h1>,
			},
		],
		faq: [
			{
				id: '2001',
				label: 'Lorem ipsum 1',
				description: 'lorem ipsum dolor sit amet 1. lorem ipsum dolor sit amet 1. lorem ipsum dolor sit amet 1. lorem' +
					' ipsum dolor sit amet 1. ',
			},
			{
				id: '2002',
				label: 'Lorem ipsum 2',
				description: 'lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem' +
					' ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit' +
					' amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem' +
					' ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit' +
					' amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2. lorem ipsum dolor sit amet 2.',
			},
			{
				id: '2003',
				label: 'Lorem ipsum 3',
				description: 'lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3. lorem ipsum dolor sit amet 3.',
			},
		],
	},
]
